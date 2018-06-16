# Crystal / Google Cloud Function Dynamic Memory Allocation Test

This repo demonstrates that statically compiled crystal binaries that perform dynamic memory
allocations do not crash when running in Google Cloud Functions.

## Usage

1. clone the repo
2. make sure that docker is installed, perform the steps needed to make docker runnable without sudo
   https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user,
   and ensure that the docker daemon is running (you can verify this with `docker info`)
5. sign up for a trial Google Cloud Platform account (or have an existing account)
6. install the gcloud cli tool https://cloud.google.com/sdk/gcloud/ and log in to your account using `gcloud init`
7. in the repo, run `./build_deploy`. The crystal alpine linux docker image will be used to compile a static binary
   of the `src/dynamic_memory_test.cr` crystal file. Then this binary will be deployed as a google cloud function
   called `crystal-dynamic-memory-test`.
8. Wait about a minute for the function to initialize. There seems to be a ~1 minute cool down time during which
   requests to the cloud function will error out.
9. curl the http trigger for the cloud function url (displayed as the value of `httpTrigger` in step 7). If everything
   works correctly, you should get output like this:

```
$ curl https://us-central1-project-id.cloudfunctions.net/crystal-dynamic-memory-test
dynamic memory test starting...
creating 400 MB of random Int32s...
dynamic memory test completed without crashing

```

That's it!

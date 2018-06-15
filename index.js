const child_process = require('child_process');

var req;
var res;

function silentCmd(command) {
  return child_process.execSync(command).toString();
}

function cmd(command) {
  console.log('$ '+command);
  var ret = silentCmd(command);
  if(ret.length > 0) console.log(ret);
  return ret;
}

exports.init = function(_req, _res) {
  req = _req;
  res = _res;
  res.status(200).send(cmd('./hello_world'));
}

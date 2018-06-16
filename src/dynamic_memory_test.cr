puts "dynamic memory test starting..."

puts "creating 400 MB of random Int32s..."
arr = [] of Int32
rand = Random.new
100_000_000.times do
  arr << rand.next_int
end

puts "dynamic memory test completed without crashing"

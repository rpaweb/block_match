openers = ['(', '[', '{']
closers = [')', ']', '}']

phrase = ARGV.first.split('')

begin
  raise ArgumentError if phrase.length % 2 != 0
  raise ArgumentError if closers.include? phrase.first
  raise ArgumentError if openers.include? phrase.last
  
  validator = []
  phrase.each do |char|
    if openers.include? char
      validator << openers.index(char)
    elsif closers.include? char
      validator.pop if closers.index(char) == validator[validator.length-1]
    end
  end
  
  puts "VALID SEQUENCE!" if validator.empty?
  raise ArgumentError if validator.any?
rescue
  puts "WRONG SEQUENCE!"
end

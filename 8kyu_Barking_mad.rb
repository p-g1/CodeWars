# https://www.codewars.com/kata/barking-mad/ruby

class Dog
  def initialize(breed)
    @breed=breed
  end
end

snoopy=Dog.new("Beagle")

def snoopy.bark()
  "Woof"
end

scoobydoo=Dog.new("Great Dane")

def scoobydoo.bark()
  "Woof"
end

# Challenge: https://www.codewars.com/kata/say-hello/ruby

def greet(name)
  if name == '' || name == nil
    return nil
  end
  return "hello #{name}!"
end

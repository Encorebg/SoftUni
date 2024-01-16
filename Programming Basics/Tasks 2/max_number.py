from sys import maxsize
number = input()

max_number = - maxsize

while number != "Stop":
    number = int(number)

    if number > max_number:
        max_number = number
    number = input()

print(max_number)
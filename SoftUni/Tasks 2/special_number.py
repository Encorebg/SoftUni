special_number = int(input())

for number in range(1111, 10000):
    number = str(number)
    digit_counter = 0
    for digit in number:
        digit = int(digit)
        if digit != 0 and special_number % digit == 0:
            digit_counter += 1
    if digit_counter == 4:
        print(number, end=" ")
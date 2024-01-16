command = input()
prime_numbers = 0
non_prime_numbers = 0
while command != "stop":
    command = int(command)
    number_is_prime_non_prime = False
    if command < 0:
        print("Number is negative.")
    else:
        if command != 0:
            for number in range(2, command):
                if command % number == 0:
                    number_is_prime_non_prime = True
                    break

        if number_is_prime_non_prime:
            non_prime_numbers += command
        elif command != 0:
            prime_numbers += command


    command = input()

print(f'Sum of all prime numbers is: {prime_numbers}')
print(f"Sum of all non prime numbers is: {non_prime_numbers}")
starting_eggs = int(input())
eggs_sold = 0
out_of_eggs = False
while True:
    command = input()
    if command == "Close":
        break
    number_of_eggs = int(input())

    if command == "Fill":
        starting_eggs += number_of_eggs
    else:
        if starting_eggs >= number_of_eggs:
            eggs_sold += number_of_eggs
            starting_eggs -= number_of_eggs
        else:
            out_of_eggs = True
            break

if out_of_eggs:
    print(f"Not enough eggs in store!")
    print(f"You can buy only {starting_eggs}.")
else:
    print(f"Store is closed!")
    print(f"{eggs_sold} eggs sold.")
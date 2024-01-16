width = int(input())
length = int(input())
heigth = int(input())

available_space = width * length * heigth

while available_space > 0:
    command = input()
    if command == "Done":
        break
    command = int(command)
    available_space -= command

if available_space > 0:
    print(f"{available_space} Cubic meters left.")
else:
    print(f"No more free space! You need {abs(available_space)} Cubic meters more.")
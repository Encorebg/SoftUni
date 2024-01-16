width = int(input())
length = int(input())
pieces = width * length

while pieces > 0:
    command = input()
    if command == "STOP":
        break
    command = int(command)
    pieces -= command

if pieces > 0:
    print(f"{pieces} pieces are left.")
else:
    pieces = abs(pieces)
    print(f"No more cake left! You need {pieces} pieces more.")

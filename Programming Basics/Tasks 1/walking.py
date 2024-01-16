
going_home = False
steps_counter = 0

while steps_counter < 10000:
    steps = input()
    if steps == "Going home":
        going_home = True
        steps = int(input())
        steps_counter += steps
        break
    steps = int(steps)
    steps_counter += steps


diff = abs(10000 - steps_counter)

if steps_counter < 10000:
    print(f"{diff} more steps to reach goal.")
else:
    print("Goal reached! Good job!")
    print(f"{diff} steps over the goal!")

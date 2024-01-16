budget = float(input())
budget_is_over = False
while True:
    command = input()

    if command == "ACTION":
        break

    command = len(command)

    if command > 15:
        reward = 0.2 * budget
    else:
        reward = float(input())
    budget -= reward

    if budget < 0:
        budget_is_over = True
        break

if budget_is_over:
    print(f"We need {abs(budget):.2f} leva for our actors.")
else:
    print(f"We are left with {budget:.2f} leva.")

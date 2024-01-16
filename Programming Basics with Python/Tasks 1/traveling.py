
destination = input()
while destination != "End":
    minimal_budget = float(input())
    sum_counter = 0
    while minimal_budget > sum_counter:
        sum = float(input())
        sum_counter += sum
    print(f"Going to {destination}!")
    destination = input()
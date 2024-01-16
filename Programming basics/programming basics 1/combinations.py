n = int(input())
combination_counter = 0
for x in range(26):
    for y in range(26):
        for z in range(26):
            if x + y + z == n:
                combination_counter += 1

print(combination_counter)
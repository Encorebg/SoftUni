n = int(input())
m = int(input())
s = int(input())

for adress in range(m, n - 1, -1):
    if adress % 2 == 0 and adress % 3 == 0:
        if adress == s:
            break
        print(f"{adress}", end=" ")
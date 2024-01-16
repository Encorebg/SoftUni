a_1 = int(input())
a_2 = int(input())
n = int(input())

for one in range(a_1 , a_2):
    for two in range(1, n):
        for tree in range(1, int(n/2)):
            if one % 2 != 0 and (one + two + tree) % 2 != 0:
                print(f"{chr(one)}-{two}{tree}{one}")

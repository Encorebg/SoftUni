first_num = input()
second_num = input()

f1, f2, f3, f4 = int(first_num[0]), int(first_num[1]),int(first_num[2]),int(first_num[3])
s1, s2, s3, s4 = int(second_num[0]), int(second_num[1]), int(second_num[2]), int(second_num[3])

for one in range(f1, s1 + 1):
    for two in range(f2, s2 + 1):
        for tree in range(f3, s3 + 1):
            for four in range(f4, s4 + 1):
                if one % 2 != 0 and two % 2 != 0 and tree % 2 != 0 and four % 2 != 0:
                    print(f'{one}{two}{tree}{four}', end=" ")


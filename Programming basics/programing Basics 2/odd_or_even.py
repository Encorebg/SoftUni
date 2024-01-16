n = int(input())
even = 0
odd = 0

for i in range(n):
    number = int(input())
    if i % 2 == 0:
        even += number
    else:
        odd += number

if odd == even:
    print("Yes")
    print(f"Sum = {even}")
else:
    diff = abs(odd - even)
    print("No")
    print(f"Diff = {diff}")
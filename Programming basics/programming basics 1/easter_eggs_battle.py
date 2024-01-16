first_player_eggs = int(input())
second_player_eggs = int(input())

command = input()
player_is_out_of_eggs = False
while command != "End":

    if command == "one":
        second_player_eggs -= 1
    else:
        first_player_eggs -= 1

    if second_player_eggs == 0 or first_player_eggs == 0:
        player_is_out_of_eggs = True
        break
    command = input()


if command == "End":
    print(f"Player one has {first_player_eggs} eggs left.")
    print(f"Player two has {second_player_eggs} eggs left.")

if player_is_out_of_eggs:
    if first_player_eggs == 0:
        print(f"Player one is out of eggs. Player two has {second_player_eggs} eggs left.")
    else:
        print(f"Player two is out of eggs. Player one has {first_player_eggs} eggs left.")



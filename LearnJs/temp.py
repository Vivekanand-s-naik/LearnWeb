#Password Lotgic
users = dict()
while True:
    name = input("Enter Name....")
    if not name.isalpha():
        print("Invalid Name Type")
        #Loop Break Logic 
        break
    name_pass = input(f"Enter {name} Password : ")

    valid = len(name_pass) == 6 and name_pass.isalnum() and not name_pass.isalpha() and not name_pass.isnumeric()

    if valid:
        #valid only if its strictly alphanumeric(abc123 not abc and not 123)->Follow this logic and length of password is 6
        print("password is valid")
        users[name] = name_pass
print(users)

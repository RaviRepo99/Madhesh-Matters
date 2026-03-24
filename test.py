# hash_password.py
import bcrypt

# Ask user for the password
password = "aqbfjotLd.$0099"

# Generate bcrypt hash with 12 rounds
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt(12))

# Output the hash as a UTF-8 string
print("\nYour bcrypt hash (store this in the database):")
print(hashed.decode())
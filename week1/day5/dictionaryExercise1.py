phonebook_dict = { 'Alice': '703-493-1834', 
'Bob': '857-384-1234', 
'Elizabeth': '484-584-2923' }

phonebook_dict['Bob'] = '968-345-2345'
phonebook_dict['Kareem']= '938-489-1234'
del phonebook_dict['Alice']

print(f"Elizabeth's number is {phonebook_dict['Elizabeth']}")
print(phonebook_dict.values())
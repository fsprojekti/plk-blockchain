from pymodbus.client.sync import ModbusTcpClient
import json 
client = ModbusTcpClient('192.168.3.250')
client.write_coil(1, True)
client.write_coil(3, True)
result_a = client.read_coils(1,1)
result_b = client.read_coils(2,1)
result_c = client.read_coils(3,1)
result_d = client.read_coils(4,1)

a = int(result_a.bits[0])
b = int(result_b.bits[0])
c = int(result_c.bits[0])
d = int(result_d.bits[0])
client.close()

dict1 ={     
        "first_column": a, 
        "second_column": b, 
        "third_column": c, 
        "fourth_column": d
  
    
} 
    
out_file = open("warehouse_state.json", "w") 
    
json.dump(dict1, out_file, indent = 1) 
    
out_file.close() 
# plk-blockchain

System consist of physical layer and application layer.

## Physical layer
```mermaid
flowchart LR

subgraph PL [Physical layer]
    direction LR
  A[Rack Warehouse ]
  B[PLK Mitchubushi]
  C[Raspberry Pi]
  D[Blockchain node]
end

A---|Electrical connections|B
B---|TPC/IP|C
C---|Internet|D

style PL fill:#AED6F1, stroke:#3498DB

```
### Rack warehouse

```mermaid
graph LR
    A[JetMax robotic arm]
    C[PLK]
    A---|Modbus|C
```
Rack warehouse has 4 docs with capacity to stack 4 packages on top of each other. 

|||||
|---|---|---|---|
|slot 12|slot 13|slot 14|slot 15|
|slot 8|slot 9|slot 10|slot 11|
|slot 4|slot 5|slot 6|slot 7|
|slot 0|slot 1|slot 2|slot 3|

Modbus variables master side
|Register|Type|Read/Write|Name|Description|Instructions|
|---|---|---|---|---|---|
||register|Read|slots|Current state slot occupation (masked 16bit integer)|slots variable is masked 16bit integer. Each bit represents one slot in a warehouse totaling to 16 slots
||coil|Write|move_exec|Begin moving robot according to selected coordinates|triggers on rising edge (0->1)
||coil|Read|move_done|Robot stoped moving|triggers on rising edge(0->1)
||register|Write|slot_source|Source slot number from which package will be taken|values from 0 to 15
||register|Write|slot_target|Target slot number to which package will be put|values from 0 to 15

**slots** 

## Application layer
```mermaid
graph LR

subgraph AL [Application layer]

subgraph P[PLK]
    D[Warehouse control]
    G[Modbus master]
  end
  subgraph R[RaspberPi]
    K[Modbus slave]
    J[Smart contract controll app]
    K---|internal communication|J
  end
  subgraph Block chain node
    L[Smart contract]
  end
  J---|RPC protocol|L
end
D---|internal PLK communication|G
G---|Modubs protocol|K 


style AL fill:#D7BDE2, stroke:#884EA0
```
### Warehouse control
### Modubs master
### Modbus slave
### Smart contract control app
### Smart contract

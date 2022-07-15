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

[Warehouse project](https://github.com/fsprojekti/rack-warehouse-jetmax)


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
### Modbus master
### Modbus slave
### Smart contract control app
### Smart contract

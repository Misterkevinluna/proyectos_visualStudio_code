package com.example.clientes_backEnd.repository;

import com.example.clientes_backEnd.models.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IClienteDao extends JpaRepository<Cliente, Long> {
}

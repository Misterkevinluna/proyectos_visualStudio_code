package com.example.clientes_backEnd.services;

import com.example.clientes_backEnd.models.Cliente;

import java.util.List;

public interface IClienteService {
    public List<Cliente> findAll();
}

package com.example.clientes_backEnd.services;

import com.example.clientes_backEnd.models.Cliente;
import com.example.clientes_backEnd.repository.IClienteDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class ClienteServiceImpl implements IClienteService{
    @Autowired
    private IClienteDao clienteDao;
    @Override
    @Transactional(readOnly = true)
    public List<Cliente> findAll() {
        return  clienteDao.findAll();
    }
}

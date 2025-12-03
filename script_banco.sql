CREATE TABLE enderecos (
    id_endereco INT IDENTITY(1,1) PRIMARY KEY,
    rua VARCHAR(150),
    numero CHAR(4),
    complemento VARCHAR(50),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    estado CHAR(2),
    cep VARCHAR(8)
);


CREATE TABLE usuarios (
    id_usuario INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(50) NOT NULL,
    telefone VARCHAR(9),
    cpf VARCHAR(11) UNIQUE,
    perfil VARCHAR(20) NOT NULL DEFAULT 'usuario',
    status BIT DEFAULT 1,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE()
);


CREATE TABLE clientes (
    id_cliente INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) UNIQUE,
    cnpj VARCHAR(14) UNIQUE,
    tipo_cliente VARCHAR(10) NOT NULL,
    email VARCHAR(50),
    telefone VARCHAR(11),
    endereco_id INT,
    data_nascimento DATE,
    data_cadastro DATE NOT NULL DEFAULT GETDATE(),
    sexo VARCHAR(50),
    status BIT DEFAULT 1,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (endereco_id) REFERENCES enderecos(id_endereco)
);


CREATE TABLE controle_contatos_cliente (
    id_controle INT IDENTITY(1,1) PRIMARY KEY,
    cliente_id INT NOT NULL,
    usuario_responsavel_id INT,
    data_contato DATETIME NOT NULL,
    tipo_contato VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL,
    retorno_agendado DATETIME,
    status_contato VARCHAR(50) DEFAULT 'pendente',
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id_cliente),
    FOREIGN KEY (usuario_responsavel_id) REFERENCES usuarios(id_usuario)
);


CREATE TABLE receitas (
    id_receita INT IDENTITY(1,1) PRIMARY KEY,
    cliente_id INT,
    descricao VARCHAR(200) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    data_recebimento DATE NOT NULL,
    forma_pagamento VARCHAR(50),
    status VARCHAR(50) DEFAULT 'prevista',
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id_cliente)
);


CREATE TABLE fornecedor (
    id_fornecedor INT IDENTITY(1,1) PRIMARY KEY,
    razao_social VARCHAR(100) NOT NULL,
    nome_fantasia VARCHAR(100),
    cnpj VARCHAR(14) UNIQUE,
    email VARCHAR(50),
    telefone VARCHAR(11),
    endereco_id INT,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (endereco_id) REFERENCES enderecos(id_endereco)
);


CREATE TABLE despesas (
    id_despesa INT IDENTITY(1,1) PRIMARY KEY,
    cliente_id INT,
    fornecedor_id INT,
    descricao VARCHAR(200) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    data_pagamento DATE NOT NULL,
    forma_pagamento VARCHAR(50),
    status VARCHAR(50) DEFAULT 'prevista',
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id_fornecedor),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id_cliente)
);


CREATE TABLE controle_banco (
    id_controle_banco INT IDENTITY(1,1) PRIMARY KEY,
    banco VARCHAR(100) NOT NULL,
    agencia VARCHAR(10) NOT NULL,
    conta VARCHAR(20) NOT NULL,
    tipo_conta VARCHAR(50) NOT NULL,
    saldo_inicial DECIMAL(10,2) DEFAULT 0.00,
    saldo_atual DECIMAL(10,2) DEFAULT 0.00,
    status BIT DEFAULT 1,
    titular VARCHAR(100),
    cliente_id INT,
    fornecedor_id INT,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id_fornecedor),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id_cliente)
);


CREATE TABLE controle_cartoes (
    id_controle_cartao INT IDENTITY(1,1) PRIMARY KEY,
    banco_id INT NOT NULL,
    numero_cartao VARCHAR(20) NOT NULL UNIQUE,
    limite_total DECIMAL(10,2) NOT NULL,
    vencimento_fatura DATE NOT NULL,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (banco_id) REFERENCES controle_banco(id_controle_banco)
);


CREATE TABLE controle_contas (
    id_controle_conta INT IDENTITY(1,1) PRIMARY KEY,
    banco_id INT,
    tipo VARCHAR(20) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    vencimento DATE NOT NULL,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (banco_id) REFERENCES controle_banco(id_controle_banco)
);


CREATE TABLE controle_pagamentos (
    id_controle_pagamento INT IDENTITY(1,1) PRIMARY KEY,
    conta_id INT NOT NULL,
    banco_id INT,
    cartao_id INT,
    data_pagamento DATE NOT NULL,
    valor_pago DECIMAL(10,2) NOT NULL,
    forma_pagamento VARCHAR(50),
    observacoes TEXT,
    status VARCHAR(50) DEFAULT 'pendente',
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (conta_id) REFERENCES controle_contas(id_controle_conta),
    FOREIGN KEY (banco_id) REFERENCES controle_banco(id_controle_banco),
    FOREIGN KEY (cartao_id) REFERENCES controle_cartoes(id_controle_cartao)
);

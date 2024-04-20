<?php

    // Obtém os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $mensagem = $_POST['mensagem'];

    // Configurações de e-mail
    $destinatario = "joaovbp1234@hotmail.com";
    $assunto = "Formulário de Contato";
    $corpo = "Nome: " . $nome . "\n" ."Email: " . $email ."\n" . "Telefone: ".$telefone . "\n" . "Mensagem: " . $mensagem;


    // Envia o e-mail
    $cabeca = "From: joaovbp1234@hotmail.com". "\n". "Reply-to: ".$email."\n". "X=Mailer:PHP/".phpversion();

    if(mail($destinatario,$assunto,$corpo,$cabeca)){
        echo("Email enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?>

<?php
// Verifica se os dados foram enviados via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    // Configurações de e-mail
    $destinatario = "joaovbp1234@hotmail.com";
    $assunto = "Formulário de Contato";
    $corpo = "Nome: " . $nome . "\n";
    $corpo .= "Email: " . $email . "\n";
    $corpo .= "Mensagem: " . $mensagem;

    // Envia o e-mail
    if (mail($destinatario, $assunto, $corpo)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Erro ao enviar o e-mail.";
    }
} else {
    // Se os dados não foram enviados via POST, redireciona para o formulário
    header("Location: index.html");
}
?>

<?php

function body_class()
{
    $paginaAtual = pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);
    echo $paginaAtual;
}
#!/bin/bash

arquivo=/home/flavianny/Shell/shell-script_ex04.sh

if [ -e $arquivo ]
  then 
     echo "O caminho $arquivo está habilitado!"

fi

if [ -w $arquivo ]
  then 
     echo "Você tem permissão para editar $arquivo"

else
    echo "Você NÃO foi autorizado a editar $arquivo"

fi

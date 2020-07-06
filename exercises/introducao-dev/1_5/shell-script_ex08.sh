#!/bin/bash

PATHS=$@

for PATH IN $PATHS
do
if [ -f "$PATH" ]
  then
     echo  "$PATH é um arquivo comum"

elif [ -d "$PATH" ]
  then
     echo "$PATH é um diretório"

else 
     echo "$PATH é alguma outra coisa"
fi
ls -l $PATH
done

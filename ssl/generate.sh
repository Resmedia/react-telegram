#!/bin/bash

openssl req  -nodes -new -x509 -days 365 -keyout server.key -out server.cert -config <( cat server.csr.cnf )

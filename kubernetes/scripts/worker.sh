#!/bin/bash

# Install Docker
sudo apt-get update && sudo apt-get install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker

# Join the cluster
sudo bash /vagrant/join-cluster.sh

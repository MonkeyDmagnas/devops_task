#!/bin/bash

# Install Docker
sudo apt-get update && sudo apt-get install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker

# Install kubeadm
sudo apt-get update && sudo apt-get install -y apt-transport-https curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubeadm kubelet kubectl
sudo apt-mark hold kubeadm kubelet kubectl

# Initialize the Kubernetes master node
sudo kubeadm init --pod-network-cidr=10.244.0.0/16



# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
config.vm.define "serverA" do |serverA|
   serverA.vm.box = "ubuntu/jammy64"
   serverA.vm.network "private_network", ip: "192.168.56.17", name: "vboxnet0"
   serverA.vm.network "public_network", type: "dhcp", bridged: "eth0"
   serverA.vm.provider "virtualbox" do |serverA_prov|
    serverA_prov.gui = false
    serverA_prov.memory = 2048
    serverA_prov.cpus = 2
    serverA_prov.name = "ServerA"
    end
# config.vm.provision "shell",inline: <<-shell
#    sudo su -
 #   yum update -y && yum upgrade -y
  #  yum install epel-release -y
    
 #   shell

end
config.vm.define "serverB" do |serverB|
    serverB.vm.box = "ubuntu/jammy64"
    serverB.vm.network :private_network, ip: "192.168.56.18", name:"vboxnet0"
    serverB.vm.network "public_network", type: "dhcp", bridged: "eth0"  
    serverB.vm.provider "virtualbox" do |serverB_prov|
      serverB_prov.gui = false
      serverB_prov.memory = 512
      serverB_prov.cpus = 1
      serverB_prov.name = "ServerB"
      end
    #serverB.vm.provision "shell",inline: <<-shell
   # sudo su -
    #yum update -y && yum upgrade -y
   # yum install epel-release -y
#    shell

end
config.vm.define "serverC" do |serverC|
    serverC.vm.box = "ubuntu/jammy64"
    serverC.vm.network :private_network, ip: "192.168.56.16", name:"vboxnet0"
    serverC.vm.network "public_network", type: "dhcp"
    serverC.vm.provider "virtualbox" do |serverC_prov|
      serverC_prov.gui = false
      serverC_prov.memory = 2048
      serverC_prov.cpus = 1
      serverC_prov.name = "ServerC"
      end
    serverC.vm.provision "shell",inline: <<-shell
      sudo su -
      apt-get update -y && apt-get upgrade -y

    shell
end

end

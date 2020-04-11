# Website

FlashFlashRevolution development environment.

**This development readme is incomplete.**

- [Website](#website)
  - [System Requirements](#system-requirements)
    - [General Requirements](#general-requirements)
    - [Hyper-V Requirements](#hyper-v-requirements)
  - [Setting up Multipass](#setting-up-multipass)
  - [Setting up Development Cluster](#setting-up-development-cluster)
  - [Deploying Services to the cluster](#deploying-services-to-the-cluster)

## System Requirements

If you do not meet any of the Hyper-V system requirements,
please make sure to follow the Virtualbox instructions!

### General Requirements

- [Git for Windows](https://gitforwindows.org/)

### Hyper-V Requirements

- [Windows 10 Professional (64 bit)](https://support.microsoft.com/en-us/help/13443/windows-which-version-am-i-running)
- [Virtualization BIOS Flags](https://www.isunshare.com/blog/how-to-enable-virtualizationvt-in-bios-for-hyper-v-windows-10/)
- [Hyper-V System Feature](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)
- [Administrator Account](https://www.computerhope.com/issues/ch001093.htm)

## Setting up Multipass

1. Open Powershell as Administrator.
2. Install Multipass (**Run only one of the following!**)
   - (Hyper-V) Run the following:

        ```bash
        choco install multipass
        ```

   - (Virtualbox) Run the following

        ```bash
        choco install multipass --params="'/HyperVisor:VirtualBox'"
        choco feature enable -n=useRememberedArgumentsForUpgrades
        ```

3. Close Powershell.

## Setting up Development Cluster

1. Open Git Bash as Administrator.
2. Navigate to this repository's root directory.
3. Run `./k3s.sh` and wait, it could take a few minutes for Hyper-V to boot up.
4. If instructed, run `export KUBECONFIG=$PWD/k3s.yaml`, if you recieve
an error please ask for assistance in Discord.

5. If `kubectl get nodes` returns something similar to the following you are good to go.

    ```bash
    $ kubectl get nodes
    NAME    STATUS   ROLES    AGE   VERSION
    node3   Ready    <none>   26s   v1.17.4+k3s1
    node1   Ready    master   25m   v1.17.4+k3s1
    node2   Ready    <none>   41s   v1.17.4+k3s1
    ```

## Deploying Services to the cluster

- tbd

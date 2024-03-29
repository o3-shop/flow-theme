# Flow Theme

## General Information

*Flow* is a responsive theme for all O3-Shop editions.


## Installation

### Step 1: Get the source code

Check out the appropriate branch for your O3-Shop version into the shop's ``Application/views`` directory:

```
cd DOCUMENT_ROOT/Application/views/
git clone -b BRANCH_NAME https://gitlab.o3-shop.com/o3/flow-theme flow
```

You should now have a new folder ``DOCUMENT_ROOT/Application/views/flow``.

### Step 2: Prepare the ``out`` folder

The ``out`` folder can be prepared in two possible ways. The first option is to use symbolic links, the second is to copy. Using a symbolic link is strongly recommended, as otherwise you would have do the copying everytime *Flow* is updated.

#### Option 1: Symbolic Linking

Link the theme's ``out`` directory to the ``out`` directory of the shop:

``ln -s ../Application/views/flow/out/flow ../../out/flow``

#### Option 2: Copying

Copy theme's ``out`` directory to shop:

``cp -r flow/out/flow ../../out/flow``

You now should be able to do ``cd ../../out/flow``.

### Step 3: Activate theme 

Log into the admin panel, go to *Extensions → Themes → Flow* and press the *Activate* button. Clean the cache and off you go, my friend!

## Development

All *Flow* theme related CSS/Javascript files can be found in theme's ``build`` directory. To regenerate the theme's assets, the ``grunt`` tasks should be used. Please install ``grunt`` and run ``grunt's`` default task to regenerate all minimized ``css`` and ``js`` files:

1. To use ``grunt``, ``npm`` is required. Check ``nodejs`` website for installation
instructions (https://nodejs.org/en/download/package-manager/). Example of
Installation on ubuntu system:

    ```
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

2. Install ``grunt`` globally and update npm. Example:

    ```
    sudo npm install -g npm grunt-cli 
    ```

3. Go to "flow" theme's directory and install all related ``grunt`` plugins:

    ```
    cd DOCUMENT_ROOT/Application/views/flow/
    npm install
    ```

4. Now its possible to regenerate "flow" theme assets by running ``grunt`` default
task while being in "flow" directory:

    ```
    grunt
    ```

## Contributing

If you are interested in contributing of some changes, Please read [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## Issues

Please forward all issues to https://issues.o3-shop.com/ for the project **Flow Theme**.

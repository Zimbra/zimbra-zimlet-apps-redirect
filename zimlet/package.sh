#!/bin/bash

npm install
zimlet build
zimlet package -v 0.0.1 --zimbraXVersion ">=2.0.0" -n "zimbra-zimlet-apps-redirect" --desc "Make the Cloudapps button go to Briefcase." -l "Cloudapps briefcase redirect"

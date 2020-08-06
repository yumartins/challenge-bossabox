#!/bin/bash

APPBOSSABOX_COMMAND=$1
shift

if [[ "$APPBOSSABOX_COMMAND" == "play" ]]; then
  eval "yarn lerna run $1 $2 $3"
elif [[ -z "$1" ]] || [[ $1 == --* ]]; then

  eval "yarn lerna run $APPBOSSABOX_COMMAND $@"
else
  APPBOSSABOX_WORKSPACES=$1
  shift

  IFS=', ' read -r -a workspaces <<< "$APPBOSSABOX_WORKSPACES"

  if [[ ${#workspaces[@]} -gt 1 ]]; then
    echo "Running command on $APPBOSSABOX_WORKSPACES workspaces"
    eval "yarn lerna run $APPBOSSABOX_COMMAND --scope=groovy-{$APPBOSSABOX_WORKSPACES} --parallel $@"
  else
    echo "Running command on $APPBOSSABOX_WORKSPACES workspace"
    eval "yarn lerna run $APPBOSSABOX_COMMAND --scope=groovy-$APPBOSSABOX_WORKSPACES --parallel $@"
  fi
fi

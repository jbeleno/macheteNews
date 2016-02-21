#!/bin/bash
CT="Content-Type:application/json"

TEST="curl http://nodejs-jbeleno.rhcloud.com/scrape/all -H $CT"
echo $TEST

RESPONSE=`$TEST`
echo $RESPONSE
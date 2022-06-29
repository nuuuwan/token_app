DIR_I18N=/Users/nuwan.senaratna/Dropbox/_CODING/py/i18n
DIR_APP_PARENT=/Users/nuwan.senaratna/Not.Dropbox/_CODING/js_react

APP_NAME=news_lk_app

cd $DIR_I18N
python3  build.py "$DIR_APP_PARENT/$APP_NAME/src/nonview/base"

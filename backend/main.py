from eve import Eve
from baseSettings import base_settings


if __name__ == '__main__':
    app = Eve(settings=base_settings)
    app.run()
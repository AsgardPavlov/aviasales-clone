from split_settings.tools import include

from config import PRODUCTION

# Include the base settings file
include("base.py")

# Include the environment-specific settings file based on the environment
if not PRODUCTION:
    include("development.py")
elif PRODUCTION:
    include("production.py")

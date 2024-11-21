terraform {
  required_providers {
    checkly = {
      source  = "checkly/checkly"
      version = "~> 1.0"
    }
  }
}

variable "checkly_api_key" {}
variable "checkly_account_id" {}

provider "checkly" {
  api_key    = var.checkly_api_key
  account_id = var.checkly_account_id
}

data "local_file" "test_script" {
  filename = "${path.cwd}/__checks__/browser.spec.ts"
}

resource "checkly_check" "browser-check-resume" {
  name      = "Resume Check"
  type      = "BROWSER"
  activated = true
  frequency = 30
  locations = [
    "us-east-1",
    "eu-west-1"
  ]

  script = data.local_file.test_script.content
}

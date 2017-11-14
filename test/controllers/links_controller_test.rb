require 'test_helper'

class LinksControllerTest < ActionDispatch::IntegrationTest
  test "should get links" do
    get links_links_url
    assert_response :success
  end

end

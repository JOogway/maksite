require 'test_helper'

class ProjectsControllerTest < ActionDispatch::IntegrationTest
  test "should get projects" do
    get projects_projects_url
    assert_response :success
  end

end

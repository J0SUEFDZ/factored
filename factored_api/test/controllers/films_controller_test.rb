require "test_helper"

class FilmsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @film = films(:one)
  end

  test "should get index" do
    get films_url, as: :json
    assert_response :success
  end

  test "should create film" do
    assert_difference('Film.count') do
      post films_url, params: { film: { director: @film.director, episode_id: @film.episode_id, opening_crawl: @film.opening_crawl, producer: @film.producer, release_date: @film.release_date, title: @film.title } }, as: :json
    end

    assert_response 201
  end

  test "should show film" do
    get film_url(@film), as: :json
    assert_response :success
  end

  test "should update film" do
    patch film_url(@film), params: { film: { director: @film.director, episode_id: @film.episode_id, opening_crawl: @film.opening_crawl, producer: @film.producer, release_date: @film.release_date, title: @film.title } }, as: :json
    assert_response 200
  end

  test "should destroy film" do
    assert_difference('Film.count', -1) do
      delete film_url(@film), as: :json
    end

    assert_response 204
  end
end

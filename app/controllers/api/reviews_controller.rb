class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        @reviews = Review.includes(:bar).where("bar.id" == "review.bar_id")
        if @reviews
            render :index
        else
            render json: {errors: ['No Reviews selected']}
        end
    end

    def create
        @review = Review.new(review_params);
        @review.author_id = current_user.id
        @review.bar_id = params[:bar_id]
        if @review.save
            render :show
        else
            render json: {errors: ['Review not saved']}
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: {errors: ['Update not saved']}
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render :show
    end

    private
    
    def review_params
        params.require(:review).permit(:rating, :body, :created_at, :updated_at, :bar_id, :author_id)
    end
end

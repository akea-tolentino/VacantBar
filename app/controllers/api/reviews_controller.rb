class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        @reviews = Bar.all
        if @reviews
            render :index
        else
            render json: {errors: ['No Reviews selected']}
        end
    end

    def create
        @review = Review.new(review_params);
        if @review.save
            render :index
        else
            render json: {errors: ['Review not saved']}
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :index
        else
            render json: {errors: ['Update not saved']}
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render :index
    end

    private
    
    def review_params
        params.require(:review).permit(:rating, :text, :created_at, :updated_at)
    end
end

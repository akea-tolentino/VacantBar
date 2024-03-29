class Api::BarsController < ApplicationController
    wrap_parameters include: Bar.attribute_names

    def index
        # if params
            @bars = Bar.all
        # else
            # @bars = Bar.where(name: params).or(Bar.where(address: [params])).or(Bar.where(type: params))
        # end
    
        if @bars
            render :index
        else
            render json: {errors: ['No Bars selected']}
        end
    end

    def show
        @bar = Bar.find(params[:id])
        if @bar
            render :show
        else
            render json: {errors: ['Bar not found'] }
        end
    end

    private

    def bar_params
        params.require(:bar).permit(:name, :address, :description, :type, :price, :capacity, images: [])
    end
end
